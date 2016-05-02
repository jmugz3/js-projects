export default function(app){
  app.get('/', (req, res) => {
    res.on('error', (error) => {
      res.status(404).end('There was an error: %s', error.stack);
    });
    res.status(200).end('Thank You for using the Rest API\n');
  });
}
