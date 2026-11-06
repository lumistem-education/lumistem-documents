Bắt đầu nhanh
==============

Tạo một dự án đầu tiên, lưu lại trên máy và chuẩn bị kết nối bo mạch.
Các bước dưới đây dành cho chế độ khách.

Chuẩn bị
---------

* Mở bản Kitchen hoặc Blockly được cung cấp bởi đơn vị triển khai của bạn.
* Chọn tiếp tục với tư cách khách nếu ứng dụng hiển thị màn hình chào.
* Tạo một thư mục trên máy để lưu tài nguyên và dự án JSON.
* Nếu muốn nạp lên thiết bị, chuẩn bị bo mạch, cáp USB truyền dữ liệu và
  :doc:`dịch vụ local <../services/local-connector>`.

Tạo dự án với Blockly
---------------------

#. Mở LumiSTEM Blockly và chọn bo mạch phù hợp với thiết bị của bạn.
#. Kéo một khối lệnh từ hộp công cụ vào vùng làm việc.
#. Ghép thêm các khối tương thích với đầu nối của khối đã chọn.
#. Kiểm tra mã được sinh ra trong vùng xem mã của ứng dụng.
#. Đặt tên dự án, chọn lưu và giữ file ``.json`` được tải về.

Bạn đã có một dự án có thể mở lại. Thử tải lại ứng dụng rồi dùng chức năng
mở dự án để kiểm tra bản lưu. Xem :doc:`../blockly/projects`.

Tạo tài nguyên riêng với Kitchen
--------------------------------

Nếu khối lệnh có sẵn chưa đáp ứng nhu cầu, mở Kitchen để
:doc:`tạo khối lệnh <../kitchen/blocks>` hoặc
:doc:`cấu hình bo mạch <../kitchen/boards>`. Tải tài nguyên về dạng JSON,
sau đó dùng chức năng nhập tương ứng của Blockly.

.. important::

   JSON khối lệnh, JSON bo mạch và JSON dự án là ba loại file khác nhau.
   Không dùng chức năng mở dự án để nhập một file khối lệnh.

Kết nối phần cứng
-----------------

#. Khởi chạy LumiSTEM Connector ở chế độ local trên máy đang cắm bo mạch.
#. Trong Blockly, mở phần cài đặt nạp chương trình và kiểm tra kết nối local.
#. Cài gói hỗ trợ bo mạch nếu ứng dụng báo thiếu.
#. Chọn đúng bo mạch và cổng kết nối rồi thực hiện biên dịch, nạp.

Xem đầy đủ tại :doc:`../blockly/upload`. Bạn vẫn có thể tạo và lưu dự án
khi chưa kết nối thiết bị.
