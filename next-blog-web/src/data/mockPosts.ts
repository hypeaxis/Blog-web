export type MockPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  content: string[];
};

export const mockPosts: MockPost[] = [
  {
    id: "hello-world",
    title: "Hello World",
    excerpt: "Bài viết đầu tiên của blog thực hành Next.js.",
    date: "2026-03-20",
    content: [
      "Đây là bài viết mở đầu cho dự án blog cơ bản với Next.js App Router.",
      "Mục tiêu là luyện cách tổ chức layout, route động theo id và điều hướng giữa các trang.",
    ],
  },
  {
    id: "nextjs-routing-basics",
    title: "Next.js Routing Basics",
    excerpt: "Tìm hiểu nhanh về static route và dynamic route trong App Router.",
    date: "2026-03-22",
    content: [
      "Trong App Router, mỗi thư mục dưới app đại diện cho một segment trên URL.",
      "Với dynamic route như [id], bạn có thể đọc params để render đúng nội dung theo từng bài.",
    ],
  },
  {
    id: "chuyen-di-da-lat",
    title: "Chuyến đi Đà Lạt tháng 4: Nhặt nhạnh chút bình yên",
    excerpt: "Đà Lạt tháng 4 không quá lạnh, đủ để mặc một chiếc áo khoác mỏng và dạo quanh hồ Xuân Hương.",
    date: "2026-03-24",
    content: [
      "Tôi quyết định xách balo lên và đi Đà Lạt vào một ngày giữa tuần để tránh xa sự ồn ào của thành phố.",
      "Không khí ở đây luôn có một phép màu nào đó giúp tâm hồn trở nên nhẹ nhõm hơn hẳn. Khởi đầu ngày mới với một ly sữa đậu nành nóng hổi và chiếc bánh tráng nướng dưới thời tiết se lạnh thật sự tuyệt vời.",
      "Điểm đến yêu thích nhất của tôi trong chuyến đi này là một quán cà phê nhỏ nằm lọt thỏm giữa rừng thông. Không có wifi, chỉ có tiếng chim hót và mùi thơm của gỗ thông."
    ],
  },
  {
    id: "bi-quyet-pha-ca-phe",
    title: "Bí quyết pha cà phê phin ngon mỗi sáng",
    excerpt: "Một chút tỉ mỉ trong cách pha sẽ mang lại ly cà phê đậm đà, thơm lừng để bắt đầu ngày mới.",
    date: "2026-03-25",
    content: [
      "Nhiều người nghĩ pha cà phê phin rất dễ, chỉ cần cho bột vào và đổ nước sôi. Nhưng thực ra, nhiệt độ nước và thời gian ủ mới là chìa khóa quyết định hương vị.",
      "Thứ nhất, nước chỉ nên ở khoảng 90-95 độ C. Nếu dùng nước vừa sôi sùng sục 100 độ, bột cà phê sẽ bị khét và sinh ra vị đắng gắt.",
      "Thứ hai, đừng quên bước 'ủ cà phê'. Rót một chút nước sôi vừa đủ thấm ướt bột cà phê, đợi khoảng 1 phút cho cà phê nở bung ra, sau đó mới rót tiếp nước thứ hai. Thử áp dụng ngay sáng mai nhé!"
    ],
  },
  {
    id: "review-sach-nha-gia-kim",
    title: "Review sách: Nhà Giả Kim - Hành trình đi tìm giấc mơ",
    excerpt: "Cuốn sách kinh điển gối đầu giường của những kẻ hay mộng mơ và đang tìm kiếm định hướng.",
    date: "2026-03-26",
    content: [
      "'Khi bạn khao khát một điều gì đó, cả vũ trụ sẽ hợp lực giúp bạn đạt được nó.' - Câu nói nổi tiếng này trong cuốn sách đã truyền cảm hứng cho tôi rất nhiều.",
      "Hành trình của cậu bé chăn cừu Santiago đi tìm kho báu ở Kim Tự Tháp Ai Cập thực chất là một ẩn dụ tuyệt đẹp về việc lắng nghe trái tim mình và theo đuổi đam mê.",
      "Mỗi lần đọc lại cuốn sách này vào những giai đoạn chông chênh của tuổi trẻ, tôi lại tìm thấy những bài học mới. Khuyến khích mọi người nên đọc thử ít nhất một lần."
    ],
  },
  {
    id: "loi-song-toi-gian",
    title: "Lối sống tối giản: Ít đồ đạc hơn, nhiều tự do hơn",
    excerpt: "Làm thế nào việc dọn dẹp tủ quần áo lại giúp tôi giải tỏa căng thẳng và sống nhẹ nhàng hơn.",
    date: "2026-03-27",
    content: [
      "Chủ nhật vừa rồi, tôi quyết định dọn dẹp lại toàn bộ căn phòng của mình. Tôi nhận ra có những món đồ tôi chưa từng đụng tới trong suốt một năm qua.",
      "Quy tắc của tôi rất đơn giản: Nếu món đồ đó không mang lại niềm vui hoặc không có giá trị sử dụng thực tế trong 6 tháng, hãy quyên góp hoặc vứt bỏ nó.",
      "Khi căn phòng trở nên trống trải hơn, tâm trí tôi cũng theo đó mà nhẹ nhõm. Lối sống tối giản không phải là ép bản thân sống kham khổ, mà là tạo ra không gian cho những điều thực sự quan trọng."
    ],
  },
  {
    id: "loi-khuyen-junior-dev",
    title: "3 Lời khuyên xương máu dành cho Junior Developer",
    excerpt: "Những điều tôi ước mình biết sớm hơn khi mới bước chân vào ngành IT.",
    date: "2026-03-28",
    content: [
      "Khi mới đi làm, tôi luôn cố gắng học mọi framework mới nhất. Nhưng thực tế, điều quan trọng nhất lại là nắm vững nền tảng (Core fundamentals).",
      "Lời khuyên thứ hai: Đừng ngại đặt câu hỏi. Một giờ tự mò mẫm bế tắc không bằng 5 phút hỏi một người đàn anh có kinh nghiệm. Tuy nhiên, hãy nhớ tự Google và tìm hiểu trước khi hỏi nhé.",
      "Cuối cùng, hãy rèn luyện kỹ năng đọc code (Readability). Bạn sẽ dành 80% thời gian để đọc code của người khác và của chính mình trong quá khứ, thay vì viết code mới."
    ],
  },
  {
    id: "cach-nau-pho-bo",
    title: "Vào bếp cuối tuần: Nấu phở bò thố đá tại nhà",
    excerpt: "Công thức nấu nước dùng phở ngọt thanh từ xương mà không cần dùng quá nhiều gia vị.",
    date: "2026-03-29",
    content: [
      "Nấu phở không khó, cái khó là sự kiên nhẫn. Một nồi nước dùng ngon đòi hỏi bạn phải ninh xương bò ít nhất 6-8 tiếng trên lửa nhỏ liêu riêu.",
      "Bí quyết để nước dùng trong và thơm là phải nướng gừng, hành tây và hoa hồi thảo quả trước khi thả vào nồi xương. Đừng quên hớt bọt thường xuyên nhé.",
      "Cuối tuần rảnh rỗi, tự tay chuẩn bị một bát phở bốc khói nghi ngút, thêm chút tương ớt, chanh tươi và quẩy giòn, cảm giác thành tựu thật sự không gì sánh bằng."
    ],
  },
  {
    id: "review-phim-interstellar",
    title: "Interstellar (2014) - Bản tình ca giữa các vì sao",
    excerpt: "Không chỉ là một bộ phim viễn tưởng về không gian, đây còn là câu chuyện về tình cha con.",
    date: "2026-03-30",
    content: [
      "Tôi vừa xem lại Interstellar lần thứ 3 và cảm xúc vẫn vẹn nguyên như lần đầu. Đạo diễn Christopher Nolan đã kết hợp hoàn hảo giữa vật lý lượng tử, hố đen vũ trụ và cảm xúc con người.",
      "Phân cảnh Cooper xem lại những đoạn video tin nhắn của các con sau khi trải qua vài giờ ở hành tinh của Miller - nơi mà 1 giờ bằng 7 năm ở Trái Đất - thực sự ám ảnh.",
      "Âm nhạc của Hans Zimmer chính là linh hồn thứ hai của bộ phim. Tiếng đàn organ dồn dập trong cảnh lắp ráp tàu vũ trụ (Docking scene) khiến người xem không thể rời mắt khỏi màn hình."
    ],
  },
  {
    id: "tai-sao-nen-hoc-typescript",
    title: "Tại sao bạn nên học TypeScript ngay hôm nay?",
    excerpt: "JavaScript rất tuyệt, nhưng TypeScript sẽ cứu bạn khỏi hàng tá lỗi ngớ ngẩn.",
    date: "2026-04-01",
    content: [
      "Nếu bạn đã làm quen với JavaScript, chắc hẳn bạn từng gặp lỗi 'Cannot read property of undefined'. Đây là ác mộng kinh điển của dân JS.",
      "TypeScript ra đời để giải quyết bài toán đó. Bằng cách định nghĩa kiểu dữ liệu (Type) rõ ràng từ đầu, editor của bạn sẽ báo lỗi ngay khi bạn gõ sai tên biến hoặc truyền sai dữ liệu vào hàm.",
      "Dù thời gian setup ban đầu hơi lâu và phải viết code nhiều hơn một chút, nhưng sự an tâm mà TypeScript mang lại khi dự án ngày càng lớn là hoàn toàn xứng đáng."
    ],
  },
  {
    id: "loi-ich-cua-viec-chay-bo",
    title: "Chạy bộ mỗi sáng đã thay đổi tôi như thế nào?",
    excerpt: "Từ một người ghét thể thao, tôi đã nghiện cảm giác mồ hôi ướt đẫm lúc 6 giờ sáng.",
    date: "2026-04-02",
    content: [
      "Ban đầu, xỏ giày ra đường lúc 5h30 sáng là một cực hình. Những kilomet đầu tiên, phổi tôi như muốn nổ tung và chân nặng trĩu.",
      "Nhưng khi kiên trì vượt qua tuần đầu, cơ thể bắt đầu thích nghi. Cơ chế sản sinh Endorphin khi chạy bộ giúp tinh thần tôi sảng khoái và tập trung làm việc tốt hơn hẳn trong ngày.",
      "Giờ đây, chạy bộ không chỉ là rèn luyện sức khỏe, mà còn là khoảng thời gian thiền định động (moving meditation) của riêng tôi, nơi tôi không phải nhìn vào bất kỳ màn hình điện thoại nào."
    ],
  },
  {
    id: "quan-ly-tai-chinh-ca-nhan",
    title: "Quy tắc 50/30/20 trong quản lý tài chính cá nhân",
    excerpt: "Một công thức đơn giản giúp bạn kiểm soát chi tiêu mà không cảm thấy quá gò bó.",
    date: "2026-04-03",
    content: [
      "Khi mới có thu nhập, tôi thường tiêu xài vô tội vạ và luôn tự hỏi 'Tiền của mình đi đâu hết rồi?'. Cho đến khi tôi biết đến quy tắc 50/30/20.",
      "Quy tắc này chia thu nhập sau thuế của bạn thành 3 phần: 50% cho nhu cầu thiết yếu (tiền nhà, ăn uống cơ bản), 30% cho mong muốn cá nhân (mua sắm, xem phim), và 20% cho tiết kiệm/đầu tư.",
      "Điểm hay của phương pháp này là nó vẫn cho phép bạn dùng 30% để tận hưởng cuộc sống, giúp việc tiết kiệm trở nên bền vững hơn."
    ],
  },
  {
    id: "nhac-lofi-va-su-tap-trung",
    title: "Nhạc Lofi - 'Thần dược' cho sự tập trung",
    excerpt: "Tại sao những giai điệu xước xát, lặp đi lặp lại lại giúp chúng ta làm việc hiệu quả hơn?",
    date: "2026-04-04",
    content: [
      "Mỗi khi cần code hoặc viết một bài dài, tôi luôn bật kênh 'Lofi Girl' trên YouTube. Âm thanh nhịp beat chậm rãi, pha chút tiếng mưa rơi hoặc tiếng lật sách tạo ra một 'tiếng ồn trắng' (white noise) hoàn hảo.",
      "Theo một số nghiên cứu, nhạc không lời với nhịp độ khoảng 60-90 nhịp/phút giúp não bộ rơi vào trạng thái 'Flow' - trạng thái tập trung sâu.",
      "Nó đủ để lấp đầy những khoảng trống yên lặng dễ gây xao nhãng, nhưng không quá sôi động để làm bạn mất tập trung vào công việc chính."
    ],
  },
  {
    id: "ky-niem-hoi-an",
    title: "Hội An ngày nắng gắt: Những mảng tường vàng và lồng đèn",
    excerpt: "Một chút hoài niệm về phố cổ trầm mặc nằm bên bờ sông Hoài.",
    date: "2026-04-05",
    content: [
      "Hội An đẹp nhất có lẽ là lúc sáng sớm, khi khách du lịch chưa ùa ra phố. Những tia nắng đầu ngày chiếu lên các mảng tường vàng đặc trưng tạo nên một bức tranh rực rỡ.",
      "Tôi thích cảm giác đạp xe chầm chậm qua các con hẻm nhỏ, dừng lại mua một ổ bánh mì Phượng và ngồi uống nước mót ven đường.",
      "Buổi tối, phố cổ khoác lên mình một diện mạo khác hẳn với hàng ngàn chiếc lồng đèn rực rỡ soi bóng xuống dòng sông Hoài. Dù đi bao nhiêu lần, Hội An vẫn luôn có một nét duyên ngầm níu chân du khách."
    ],
  },
  {
    id: "nhung-con-mua-ha-noi",
    title: "Những cơn mưa rào mùa hạ ở Hà Nội",
    excerpt: "Mưa Hà Nội đến nhanh, đi nhanh, để lại mùi ngai ngái của đất và sự mát lành hiếm hoi.",
    date: "2026-04-06",
    content: [
      "Hà Nội những ngày tháng 5 thường oi bức ngột ngạt. Bầu trời âm u cả buổi trước khi trút xuống một trận mưa rào trắng xóa.",
      "Ngồi trong quán cà phê nhìn ra đường phố lúc trời mưa lớn là một cảm giác rất thi vị. Mọi hối hả của dòng xe cộ dường như bị tiếng mưa át đi hết.",
      "Và sau cơn mưa, bầu không khí như được gột rửa. Cây cối xanh mướt hơn, đường phố sạch sẽ hơn, và lòng người cũng thấy dễ chịu lạ thường."
    ],
  }
];