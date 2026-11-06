Tổng quan Kitchen
==================

LumiSTEM Kitchen là nơi chuẩn bị tài nguyên cho môi trường lập trình:
định nghĩa khối lệnh và cấu hình bo mạch.

Hai không gian làm việc
-----------------------

**Khối lệnh:** thiết kế nhãn, trường nhập liệu, đầu nối và các phần mã
Arduino dùng khi sinh chương trình. Xem :doc:`blocks`.

**Bo mạch:** khai báo thông tin định danh, FQBN, chân kết nối và tùy chọn
biên dịch/nạp của một bo mạch. Xem :doc:`boards`.

Quy trình dành cho guest
------------------------

#. Mở không gian khối lệnh hoặc bo mạch.
#. Tạo mới hoặc nhập file JSON đúng loại.
#. Chỉnh sửa dữ liệu và kiểm tra vùng xem trước.
#. Dùng chức năng tải JSON để lưu kết quả trên máy.
#. Mở Blockly và nhập tài nguyên bằng chức năng phù hợp.

.. note::

   Chức năng tải JSON là cách lưu kết quả khi chưa đăng nhập. Nút lưu lên
   máy chủ không thuộc luồng guest. Giá trị visibility trong file không
   có nghĩa là tài nguyên đã được công bố lên thư viện.

Kiểm tra trước khi xuất
------------------------

Đặt tên có ý nghĩa, kiểm tra loại trường và chân kết nối, rồi giữ một bản
file trước khi sửa tiếp. Với khối lệnh có sinh mã, hãy kiểm tra mã trong
Blockly sau khi nhập; hình dạng hợp lệ chưa đảm bảo mã biên dịch thành công.
