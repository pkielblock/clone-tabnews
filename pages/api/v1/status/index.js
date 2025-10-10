function status(request, response) {
  response.status(200).json({ chave: "this is a key" });
}

export default status;
