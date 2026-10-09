# Sổ giờ Arubaito

Ứng dụng ghi giờ làm thêm (アルバイト) cho du học sinh ở Nhật, giúp không bị quá giờ (超過).

- Tab **Quán**: lưu thông tin quán một lần (tên, 時給, địa chỉ, số điện thoại, ghi chú) cùng các **ca thường làm** (ví dụ Ca sáng 09:00–13:00).
- Thêm ca: chọn quán, chạm vào ca thường làm, chọn ngày là xong. Vẫn sửa được giờ vào (出勤), giờ ra (退勤), thời gian nghỉ (休憩); ca qua đêm cũng được.
- **Chấm công theo ca đã xếp**: đến ca, ở Trang chủ bấm **Vào ca 出勤**, **Nghỉ 休憩** / **Hết nghỉ**, rồi **Ra ca 退勤**. App ghi giờ thực làm (thẻ “Đang trong ca” hiện đồng hồ chạy, nút vào ca xuất hiện từ 2 tiếng trước giờ vào). Tổng giờ tuần, cảnh báo và lương dùng giờ thực khi đã có, ca chưa chấm dùng giờ đã xếp. Không bấm Vào ca thì ca tính theo giờ đã xếp. Đã vào ca mà quên Ra ca thì sau 6 tiếng quá giờ ra (hoặc khi bấm vào ca kế tiếp) app tự lấy giờ ra theo lịch và gắn nhãn “Quên ra ca”. Mở ca để nhập hoặc sửa giờ thực tế bất cứ lúc nào; mỗi lần bấm đều có Hoàn tác.
- Tự cộng giờ theo **tuần** và **tháng**, chia theo từng quán.
- **Lương dự tính** theo từng quán: 時給 ngày thường, T7/CN và ngày lễ (ngày lễ Nhật 祝日 được nhận tự động, kể cả 振替休日), phụ cấp làm đêm 22:00–5:00 (mặc định +25%), tiền tàu theo số ngày đi làm. Tính theo kỳ chốt lương (締め日) và hiện ngày nhận lương (給料日) của từng quán. Số tiền là trước thuế.
- **Dự trù tháng**: giới hạn tuần × số ngày trong tháng ÷ 7 (ví dụ 28h × 31 ÷ 7 = 124h), còn bao nhiêu giờ và trung bình mỗi ngày còn lại. Không giới hạn số giờ mỗi ngày.
- **Cảnh báo đỏ**: tuần vượt giới hạn (mặc định 28h) thì thanh trên cùng chuyển đỏ, các ca làm vượt in màu đỏ, kèm gợi ý rút lịch tuần sau.
- Giờ còn lại tính trong từng tuần, bắt đầu từ ngày đầu tuần chọn trong Cài đặt (Thứ Hai hoặc Chủ nhật); lịch tuần và lịch tháng cũng bắt đầu từ ngày đó.
- **Kỳ nghỉ dài** (長期休業): khai báo khoảng ngày, tuần nằm trọn trong kỳ nghỉ dùng giới hạn 40h/tuần.
- Xuất và nhập bản sao lưu `.json`.
- **5 ngôn ngữ**: Tiếng Việt, English, 日本語, 简体中文, 한국어 (đổi ở Cài đặt → Ngôn ngữ). Lần đầu mở app tự theo ngôn ngữ của máy; ai đã có dữ liệu từ trước vẫn giữ tiếng Việt. Ngày hiển thị dd/mm với tiếng Việt, m/d với các ngôn ngữ khác.
- Giao diện hiện đại: nền xám nhạt, thẻ trắng bo tròn lớn, nút viên thuốc màu than, thẻ minh hoạ núi Phú Sĩ đổi màu trời theo số giờ trong tuần (xanh → vàng → đỏ), thanh tab nổi, vuốt trái để xoá ca (có hoàn tác), hỗ trợ chế độ tối.

## Cách 1: Dùng qua link Claude

Link: https://claude.ai/artifact/VV4Gcs3EAtDCPjgZVZNKJf

1. Trên iPhone, mở link bằng app Claude, hoặc bằng Safari khi đã đăng nhập claude.ai.
2. Dữ liệu chỉ lưu trên thiết bị đang dùng (trong trình duyệt), không đồng bộ giữa iPhone và máy tính. Nên vào **Cài đặt → Xuất bản sao lưu** định kỳ.
3. Muốn có biểu tượng trên màn hình chính: trong Safari bấm **Chia sẻ** → **Thêm vào MH chính**.

Link đang ở chế độ riêng tư, chỉ bạn mở được.

## Cách 2: App riêng trên iPhone (GitHub Pages)

App đã được đưa lên: **https://longnv-2502-work.github.io/arubaito/** (repo [longnv-2502-work/arubaito](https://github.com/longnv-2502-work/arubaito), thư mục `docs/`).

Cài lên iPhone:
1. Mở địa chỉ trên bằng **Safari**.
2. Bấm **Chia sẻ** → **Thêm vào MH chính** → **Thêm**.
3. Luôn mở bằng biểu tượng trên màn hình chính: app mở toàn màn hình và chạy cả khi không có mạng.

Dữ liệu nằm trên iPhone, không đồng bộ với bản link Claude. Thỉnh thoảng vào **Cài đặt → Xuất bản sao lưu** để giữ một bản dự phòng.

Cập nhật app sau khi sửa (chạy trong thư mục dự án):
```bash
npm run build && git add . && git commit -m "Cập nhật" && git push
```
Đợi 1–2 phút, mở lại app trên iPhone là có bản mới.

## Chạy thử trên máy tính

Cần Node.js 18 trở lên.

```bash
npm run serve
```

Mở http://localhost:8080. iPhone cùng mạng Wi-Fi có thể mở địa chỉ `http://<IP-máy-tính>:8080` được in ra trong terminal để xem thử (chế độ offline chỉ hoạt động khi chạy qua HTTPS như Cách 2).

## Sửa ứng dụng

- Toàn bộ ứng dụng nằm trong `src/app.html` (HTML, CSS, JavaScript, không cần thư viện).
- Sau khi sửa, chạy `npm run build` để tạo lại `docs/`, rồi commit và push nếu dùng GitHub Pages.
- `public/` chứa manifest, service worker và biểu tượng. `scripts/icon.html` là bản vẽ biểu tượng.

## Về quy định giờ làm

Quy định thường gặp với visa du học (資格外活動許可): tối đa 28 giờ mỗi tuần trong kỳ học, cộng dồn tất cả nơi làm; trong kỳ nghỉ dài do trường quy định có thể làm tối đa 40 giờ/tuần. Ứng dụng chỉ hỗ trợ theo dõi. Hãy xác nhận quy định cụ thể với trường hoặc Cục Xuất nhập cảnh (出入国在留管理庁).
