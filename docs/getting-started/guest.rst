Chế độ khách
=============

Guest là cách sử dụng ứng dụng khi chưa đăng nhập. Với luồng này, bạn quản lý
bản lưu bằng file trên máy và sử dụng dịch vụ local cho phần cứng.

Bạn có thể làm gì?
------------------

.. list-table::
   :header-rows: 1
   :widths: 25 75

   * - Công cụ
     - Luồng sử dụng dành cho khách
   * - Kitchen
     - Tạo, xem trước, nhập và tải file JSON của khối lệnh hoặc bo mạch.
   * - Blockly
     - Kéo thả lập trình, nhập tài nguyên, lưu và mở dự án trên máy.
   * - Services
     - Đọc dữ liệu công khai theo cấu hình triển khai; dùng Connector local
       để biên dịch và kết nối thiết bị.

Giới hạn cần biết
------------------

* Lưu tài nguyên lên máy chủ trong Kitchen yêu cầu đăng nhập. Với guest,
  hãy dùng chức năng tải JSON.
* Guest không sử dụng dịch vụ compiler có xác thực qua gateway. Hoạt động
  biên dịch, nạp của guest đi qua dịch vụ local.
* Khả năng đọc thư viện công khai phụ thuộc kết nối mạng và cấu hình máy chủ.
  Bản GitHub Pages có thể sử dụng dữ liệu đi kèm thay cho API trực tiếp.
* Những thao tác liên quan đến tài khoản hoặc quản trị không nằm trong tài
  liệu phiên bản này.

Giữ an toàn cho bản lưu
-----------------------

Tải một bản JSON trước khi đổi máy, xóa dữ liệu trình duyệt hoặc thay đổi
lớn trong dự án. Dữ liệu nháp trong trình duyệt không thay thế file dự phòng.

Đặt tên file dễ nhận biết, chẳng hạn ``robot-tranh-vat-can-01.json``.
Giữ file tài nguyên Kitchen riêng với file dự án Blockly để dễ mở lại.

Làm việc khi mất mạng
---------------------

Dữ liệu thư viện từ máy chủ và việc cài thêm gói bo mạch có thể cần Internet.
Đừng coi ứng dụng là hoàn toàn offline. Trước buổi học, mở sẵn ứng dụng,
chuẩn bị các file cần dùng và kiểm tra dịch vụ local với bo mạch thực tế.
