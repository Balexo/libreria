import app from "./app";
console.log("El servidor está iniciando...");

const port = app.get("port") as number;

app.listen(app.get("port"));
console.log("Server on port", app.get("port"));
