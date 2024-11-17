const vip = (req, res) => {
    console.log(req.body.level);
    
  switch (req.body.level) {
    case "vip0":
      return res
        .status(200)
        .json({
          message:
            "Chào mừng VIP 0! Đây là nội dung đặc biệt dành cho bạn.",
        });
    case "vip1":
      return res
        .status(200)
        .json({
          message:
            "Chào mừng VIP 1! Đây là nội dung đặc biệt dành cho bạn.",
        });
    case "vip2":
      return res
        .status(200)
        .json({
          message: "Chào mừng VIP 2! Đây là nội dung dành riêng cho bạn.",
        });
    case "vip3":
      return res
        .status(200)
        .json({
          message:
            "Chào mừng VIP 3! Bạn có quyền truy cập vào nội dung này.",
        });
    case "vip4":
      return res
        .status(200)
        .json({
          message: "Chào mừng VIP 4! Đây là nội dung cao cấp cho bạn.",
        });
    default:
      return res
        .status(403)
        .json({ message: "Không có nội dung phù hợp với quyền của bạn." });
  }
}

module.exports = {vip}