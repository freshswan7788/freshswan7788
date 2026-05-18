# Kettle: Oracle vs GoldenDB 字段元数据对比

## 文件

- `compare_columns_ora_vs_gdb.ktr` —— Kettle (PDI) 转换文件
- `meta_diff_result.sql` —— 差异结果表 DDL（在 GoldenDB 里执行）

## 使用步骤

### 1. 准备环境
- PDI 9.x（Spoon）
- `data-integration/lib/` 下放好驱动：
  - `ojdbc8.jar`（Oracle）
  - `mysql-connector-java-8.0.x.jar`（GoldenDB 用 MySQL 协议）

### 2. 建结果表
在 GoldenDB 里执行 `meta_diff_result.sql`。

### 3. 打开 ktr
Spoon → File → Open → 选 `compare_columns_ora_vs_gdb.ktr`。

### 4. 配数据库连接
双击左侧 `ORA_SRC` 和 `GDB_TGT`，填上真实的 host / port / 用户名 / 密码，点 **Test** 验证。

### 5. 改参数
Edit → Settings → Parameters：

| 参数 | 示例 | 说明 |
|---|---|---|
| `ORA_TABLE_LIST` | `'T_ORDER','T_USER'` | Oracle 表名（大写，单引号，逗号分隔） |
| `GDB_TABLE_LIST` | `'t_order','t_user'` | GoldenDB 表名（小写） |
| `GDB_SCHEMA` | `your_db` | GoldenDB 库名 |

### 6. 运行
按 F9 或工具栏 ▶️。

### 7. 查结果
```sql
SELECT table_name, column_name, flag, data_type, data_length, data_scale, is_nullable
FROM meta_diff_result 
WHERE check_time = (SELECT MAX(check_time) FROM meta_diff_result)
ORDER BY table_name, flag, column_name;
```

## flag 含义

| flag | 含义 |
|---|---|
| `new` | 该字段只在 **GoldenDB** 有，Oracle 缺 |
| `deleted` | 该字段只在 **Oracle** 有，GoldenDB 缺 |
| `changed` | 字段同名但 type/length/scale/nullable 至少一项不同 |

`identical`（一致的）已被过滤掉，不写入结果表。

## 命令行运行

```bash
./pan.sh -file=/path/compare_columns_ora_vs_gdb.ktr \
         -param:ORA_TABLE_LIST="'T_ORDER','T_USER'" \
         -param:GDB_TABLE_LIST="'t_order','t_user'" \
         -param:GDB_SCHEMA=your_db \
         -level=Basic
```
