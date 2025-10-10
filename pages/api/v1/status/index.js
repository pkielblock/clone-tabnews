function status(request, response) {
  response.status(200).json({ status: "working" });
}

export default status;
