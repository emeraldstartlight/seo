export default function handler(req, res) {
  if (!global.store) {
    global.store = [];
  }
  res.status(200).json(global.store);
}
