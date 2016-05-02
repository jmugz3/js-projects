export default function(app){
  app.get('/foo', (req, res) => {
    res.on('error', (err) => {
      res.status(404).end('There was an error: %s', error.stack)
    });

    res.writeHead(200, {'Content-Type':'text/plain'});
    res.status(200).json([ "foo", "bar", "quux", "baz"]);
    res.end();
  });
}
