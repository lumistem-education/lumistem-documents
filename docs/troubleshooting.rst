Xử lý sự cố
============

Lưu bản dự phòng của dự án trước khi thử các bước có thể làm thay đổi
vùng làm việc hoặc tài nguyên đã nạp.

Không lưu được lên máy chủ
--------------------------

Guest dùng chức năng tải file JSON. Lưu tài nguyên Kitchen lên máy chủ
yêu cầu đăng nhập. Xem :doc:`getting-started/guest`.

Không nhập được JSON
--------------------

#. Kiểm tra bạn đang dùng đúng chức năng nhập cho loại file.
#. Thử lại file gốc được tải từ Kitchen hoặc Blockly.
#. Nếu file đã được sửa bên ngoài ứng dụng, kiểm tra cú pháp và các trường
   bắt buộc còn đầy đủ.
#. Với khối lệnh, kiểm tra type và các tên trường. Với bo mạch, kiểm tra
   slug, FQBN và khai báo chân.

Xem bảng :doc:`phân biệt các loại file <blockly/projects>`.

Không thấy thư viện hoặc bo mạch
--------------------------------

Kiểm tra kết nối Internet và trạng thái máy chủ của bản triển khai.
Kiểm tra bo mạch đang chọn và các bộ lọc thư viện. Nếu đang dùng tài nguyên
tự tạo, nhập lại file bằng đúng chức năng trước khi mở rộng chương trình.

Blockly không kết nối được local
--------------------------------

#. Kiểm tra Connector đang chạy trên cùng máy với trình duyệt.
#. Mở ``http://127.0.0.1:8765/api/health`` để kiểm tra phản hồi.
#. Kiểm tra trình duyệt có chặn quyền truy cập mạng cục bộ hay không.
#. Kiểm tra log Connector nếu tiến trình dừng hoặc báo cổng đang được dùng.

Xem :doc:`services/local-connector`.

Biên dịch thất bại
------------------

Đọc lỗi đầu tiên trong log. Kiểm tra gói hỗ trợ bo mạch đã cài, FQBN đúng
và các thư viện chương trình cần dùng đã sẵn sàng. Với khối tự tạo, kiểm tra
các phần ``include``, ``define``, ``setup`` và ``generate`` trong Kitchen.

Nạp thất bại hoặc không thấy cổng
---------------------------------

Kiểm tra cáp có hỗ trợ truyền dữ liệu, bo mạch được hệ điều hành nhận diện
và cổng không bị chương trình khác chiếm dụng. Chọn lại cổng sau khi rút cắm
thiết bị. Kiểm tra phương thức nạp và driver theo hướng dẫn của bo mạch.

Serial hiển thị sai ký tự
-------------------------

Chọn tốc độ baud trùng với cấu hình trong chương trình. Nếu vẫn lỗi,
kiểm tra đúng cổng và bảo đảm không có công cụ khác đang giữ kết nối.
