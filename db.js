import FileSync from "lowdb/adapters/FileSync";
import low from "lowdb";

const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({ user: [] }).write(); // nếu file db.json mà trống thì thêm obj { user: [] } vào

export default db;
