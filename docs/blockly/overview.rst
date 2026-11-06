Tổng quan Blockly
==================

LumiSTEM Blockly là môi trường lập trình bằng khối lệnh. Bạn xây dựng
chương trình trên vùng làm việc, kiểm tra mã và chuẩn bị nạp lên thiết bị.

Các vùng giao diện
-------------------

**Thanh công cụ:** tạo hoặc mở dự án, lưu, đổi tên, chọn ngôn ngữ,
mở cài đặt và xuất ảnh.

**Hộp công cụ:** các nhóm khối lệnh có thể kéo vào dự án. Nội dung phụ thuộc
bo mạch và tài nguyên đã được nạp.

**Vùng làm việc:** nơi ghép khối và sắp xếp chương trình.

**Vùng xem mã và thiết bị:** kiểm tra chương trình sinh ra và thực hiện
các thao tác liên quan đến biên dịch, nạp hoặc dữ liệu nối tiếp.

Ghép chương trình
------------------

#. Chọn bo mạch phù hợp trước khi xây dựng chương trình.
#. Mở một nhóm trong hộp công cụ và kéo khối vào vùng làm việc.
#. Ghép các đầu nối tương thích. Khối trả về giá trị cần được đặt vào đầu
   vào chấp nhận kiểu dữ liệu đó.
#. Sửa thông số trong khối và kiểm tra kết quả trong vùng mã.
#. Lưu dự án thành file JSON trước khi đổi bo mạch hoặc thay đổi lớn.

Sử dụng tài nguyên Kitchen
--------------------------

Nhập khối hoặc bo mạch bằng chức năng nhập tương ứng trong Blockly.
File tài nguyên Kitchen không được mở qua menu mở dự án.

Khi đổi bo mạch, kiểm tra lại các trường chân và khối phụ thuộc thiết bị.
Một chương trình sử dụng được trên bo mạch này chưa chắc biên dịch được
trên bo mạch khác.

Bước tiếp theo
---------------

Xem :doc:`projects` để quản lý bản lưu và :doc:`upload` để kết nối bo mạch
thông qua dịch vụ local.
