Biên dịch và nạp chương trình
=============================

Guest sử dụng dịch vụ local trên máy của mình để biên dịch và nạp chương
trình. Hãy hoàn thành :doc:`../services/local-connector` trước khi thao tác.

Chuẩn bị kết nối
----------------

#. Cắm bo mạch bằng cáp USB truyền dữ liệu.
#. Khởi chạy LumiSTEM Connector local trên cùng máy.
#. Mở cài đặt của Blockly và kiểm tra phần biên dịch/nạp local.
#. Kiểm tra địa chỉ dịch vụ: ``http://127.0.0.1:8765``.
#. Chọn bo mạch và gói hỗ trợ phù hợp; cài gói nếu chưa có.

Các gói hỗ trợ chỉ được cài khi bạn chọn cài đặt. Lần cài đầu có thể cần
Internet và mất thời gian tùy dung lượng gói.

Biên dịch
----------

Kiểm tra mã được sinh ra rồi thực hiện biên dịch trong ứng dụng. Theo dõi
thông báo tiến trình và kết quả. Nếu biên dịch thất bại, xử lý lỗi đầu tiên
trong log: thường liên quan đến thư viện thiếu, FQBN sai hoặc mã trong khối
lệnh tùy chỉnh chưa hợp lệ.

Nạp lên bo mạch
---------------

#. Chọn cổng đúng với bo mạch đang cắm.
#. Kiểm tra phương thức và tốc độ nạp theo cấu hình thiết bị.
#. Thực hiện nạp và chờ thông báo hoàn tất.
#. Quan sát hành vi thực tế của bo mạch để xác nhận chương trình.

Không rút cáp trong lúc nạp. Nếu cổng đang được ứng dụng khác sử dụng,
đóng phiên kết nối đó rồi thử lại.

Kiểm tra Serial
----------------

Nếu chương trình có xuất dữ liệu Serial, mở vùng theo dõi nối tiếp và chọn
tốc độ baud trùng với chương trình. Khi chữ hiển thị sai, kiểm tra baud
trước khi thay đổi mã.

Gặp lỗi kết nối hoặc nạp? Xem :doc:`../troubleshooting`.
