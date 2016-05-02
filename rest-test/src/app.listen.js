export default function(app, port){
  app.listen(port, () => console.log(`process id: %s running on localhost:${port}`, process.pid));
}
