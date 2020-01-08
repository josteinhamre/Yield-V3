import server from "./createServer";

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
