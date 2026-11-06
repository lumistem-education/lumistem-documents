Cấu hình bo mạch
================

Tài nguyên bo mạch giúp Blockly biết loại thiết bị, các chân có thể sử dụng
và các tùy chọn biên dịch hoặc nạp chương trình.

Thông tin cơ bản
-----------------

Nhập tên bo mạch, ``slug`` và ``fqbn``. Slug là định danh dùng trong dữ liệu;
FQBN là định danh nền tảng/kiến trúc/bo mạch mà Arduino CLI sử dụng.

Ví dụ, Arduino Uno dùng FQBN:

.. code-block:: text

   arduino:avr:uno

FQBN phải phù hợp với gói bo mạch đã cài ở dịch vụ local. Thay đổi tên hiển
thị không tự thay đổi gói biên dịch.

Khai báo chân
--------------

#. Thêm tên chân mà bạn muốn hiển thị trong ứng dụng.
#. Nhập số chân tương ứng theo tài liệu phần cứng của bo mạch.
#. Chọn các loại chân mà phần cứng thực sự hỗ trợ.
#. Kiểm tra các tên chân không bị trùng.

.. important::

   Đối chiếu sơ đồ chân của nhà sản xuất trước khi nối mạch. Tên chân in
   trên bo mạch và số chân dùng trong chương trình có thể khác nhau.

Tùy chọn biên dịch và nạp
-------------------------

Điền tốc độ nạp và các tùy chọn như CPU, biến thể bo mạch, CDC on boot hoặc
phương thức nạp khi bo mạch yêu cầu. Chỉ sử dụng các giá trị tương thích với
gói hỗ trợ thiết bị.

Xuất file bo mạch
-----------------

Dùng chức năng tải JSON để lưu cấu hình. Tên file được tạo từ slug.
File chứa thông tin bo mạch, ``pins_json`` và ``build_config``.

Bạn có thể nhập lại file này vào Kitchen hoặc dùng chức năng nhập bo mạch
trong Blockly. Nếu ảnh bo mạch dùng tham chiếu cục bộ của trình duyệt,
tham chiếu đó có thể không hiển thị trên máy khác; hãy chọn lại ảnh nếu cần.
