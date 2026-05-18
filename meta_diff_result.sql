-- 在 GoldenDB 里执行，建好差异结果表后再跑 ktr
CREATE TABLE IF NOT EXISTS meta_diff_result (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  table_name   VARCHAR(64)  NOT NULL,
  column_name  VARCHAR(64)  NOT NULL,
  flag         VARCHAR(20)  NOT NULL COMMENT 'new=GDB only / deleted=ORA only / changed=attr diff',
  data_type    VARCHAR(30),
  data_length  INT,
  data_scale   INT,
  is_nullable  VARCHAR(5),
  check_time   DATETIME     NOT NULL,
  KEY idx_table (table_name),
  KEY idx_check_time (check_time)
) COMMENT='Oracle vs GoldenDB column metadata diff';
