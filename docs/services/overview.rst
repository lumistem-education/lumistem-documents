Tổng quan Services
===================

Services cung cấp dữ liệu và khả năng kết nối cho bộ phần mềm. Với guest,
bạn cần phân biệt dịch vụ trên máy chủ và dịch vụ chạy trên máy của mình.

Các thành phần
---------------

.. list-table::
   :header-rows: 1
   :widths: 26 74

   * - Thành phần
     - Vai trò với luồng sử dụng
   * - Gateway
     - Điều phối yêu cầu từ ứng dụng đến các dịch vụ và kiểm tra quyền truy cập.
   * - Blockly Services
     - Cung cấp dữ liệu khối lệnh, danh mục, bo mạch và dự án theo quyền truy cập.
   * - Authentication Services
     - Xử lý tài khoản và phiên đăng nhập; guest không cần cấu hình phần này.
   * - LumiSTEM Connector
     - Cung cấp công cụ biên dịch và kết nối thiết bị. Guest dùng chế độ local.

Luồng làm việc của guest
------------------------

* **Kitchen → file JSON → Blockly** để chuyển tài nguyên.
* **Blockly → Connector local → bo mạch** để biên dịch và nạp.
* **Ứng dụng → Gateway → dữ liệu công khai** khi bản triển khai có sử dụng API.

Đọc dữ liệu công khai
---------------------

Gateway hiện có các luồng đọc công khai cho danh mục, khối lệnh, bo mạch
và dự án. Nội dung thực tế trả về vẫn phụ thuộc mức hiển thị và trạng thái
tài nguyên. Việc một API hỗ trợ đọc công khai không cấp quyền sửa hoặc xóa.

Đây là phần ứng dụng tự xử lý. Người sử dụng guest không cần tự gửi yêu cầu
API để làm theo các hướng dẫn trong tài liệu.

Dịch vụ local
--------------

Địa chỉ local mặc định là ``http://127.0.0.1:8765``. Đây là dịch vụ trên
chính máy đang mở trình duyệt, không phải trên máy chủ GitHub Pages.
Xem :doc:`local-connector` để chuẩn bị trước khi dùng phần cứng.
