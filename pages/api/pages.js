export default function handler(req, res) {
    let pageJson = {pages: ['Aboutme', 'Services', 'Works', 'Contact']}
    res.status(200).json(pageJson);
  }
  