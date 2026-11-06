Kết nối dịch vụ local
=====================

LumiSTEM Connector chạy trên máy của bạn, cung cấp công cụ biên dịch,
quản lý gói hỗ trợ và làm việc với thiết bị.

Chuẩn bị Connector
-------------------

Sử dụng bộ cài hoặc bản phát hành Connector do đơn vị triển khai cung cấp,
đúng với hệ điều hành của bạn. Khởi chạy ở chế độ ``local`` và để tiến trình
tiếp tục chạy trong lúc sử dụng Blockly.

Trong chế độ local, Connector sử dụng cổng ``8765``. Địa chỉ Blockly dùng
để kết nối là:

.. code-block:: text

   http://127.0.0.1:8765

Nếu tự chạy Connector từ mã nguồn, cấu hình ``SERVER_MODE=local``. Phần
cài đặt công cụ phụ thuộc bản phát hành; dùng hướng dẫn đi kèm Connector
để chuẩn bị Arduino CLI trước khi biên dịch.

Kiểm tra dịch vụ
----------------

Bạn có thể mở địa chỉ kiểm tra trong trình duyệt:

.. code-block:: text

   http://127.0.0.1:8765/api/health

Hoặc dùng terminal:

.. code-block:: console

   curl http://127.0.0.1:8765/api/health

Nếu chưa nhận được phản hồi, kiểm tra tiến trình Connector, log khởi động
và cổng đang sử dụng. Đừng bắt đầu nạp khi dịch vụ chưa chạy.

Cấu hình trong Blockly
----------------------

#. Mở cài đặt và tìm phần biên dịch/nạp chương trình.
#. Kiểm tra trạng thái kết nối đến dịch vụ local.
#. Chọn gói hỗ trợ đúng với bo mạch và thực hiện cài đặt nếu cần.
#. Quay lại dự án, chọn bo mạch và cổng kết nối.

.. note::

   Nếu trình duyệt yêu cầu quyền truy cập mạng cục bộ hoặc thiết bị, chỉ
   cấp quyền cho ứng dụng LumiSTEM bạn đang sử dụng. Tên và vị trí phần
   cấp quyền phụ thuộc trình duyệt.

Khi chuyển sang máy khác
------------------------

Chạy Connector trên máy mới, cài các gói cần thiết và mở file dự án đã lưu.
Địa chỉ ``127.0.0.1`` luôn trỏ về máy đang dùng; chạy Connector trên một
máy khác trong mạng không làm dịch vụ local xuất hiện ở địa chỉ này.
