Tạo khối lệnh
==============

Một khối lệnh gồm phần hiển thị trong Blockly và phần mã được sinh ra.
Kitchen cho phép bạn chỉnh sửa hai phần này và xem trước trước khi tải file.

Đặt thông tin khối
-------------------

#. Mở trình tạo khối lệnh trong Kitchen.
#. Đặt ``type`` có ý nghĩa, chẳng hạn ``led_blink``.
#. Viết mô tả và tooltip để người sử dụng hiểu tác dụng của khối.
#. Chọn hình dạng tương ứng với khối lệnh nối tiếp hoặc khối trả về giá trị.

Giữ ``type`` nhất quán khi chỉnh sửa tài nguyên cũ. Tránh dùng trùng định
danh với các khối đang có trong dự án.

Thêm thành phần hiển thị
------------------------

Các thành phần trong trình tạo bao gồm nhãn, đầu vào giá trị, trường văn
bản, trường số, trường chân, ô chọn và đầu vào chứa chuỗi lệnh.

#. Thêm nhãn để giải thích hành động, ví dụ “bật LED tại chân”.
#. Thêm trường chân hoặc trường số nếu cần một tham số.
#. Đặt tên trường riêng biệt và chọn kiểu dữ liệu tương thích.
#. Sắp xếp lại thứ tự và xem trước hình dạng khối.

Nếu sử dụng trường chân, kiểm tra nhóm chân cho phép của trường đó có
phù hợp với bo mạch dự định sử dụng hay không.

Thiết lập mã Arduino
---------------------

.. list-table::
   :header-rows: 1
   :widths: 22 78

   * - Phần mã
     - Mục đích
   * - ``include``
     - Khai báo thư viện cần dùng.
   * - ``define``
     - Khai báo dùng chung cho chương trình.
   * - ``setup``
     - Các lệnh khởi tạo.
   * - ``generate``
     - Mã sinh ra khi khối được sử dụng.

Theo dõi vùng xem trước Arduino khi thay đổi các trường. Với mã phụ thuộc
thư viện, máy biên dịch cần có thư viện tương ứng trước khi chạy.

Xuất và mở lại
---------------

#. Chọn tải JSON. Tên file được tạo từ ``type`` của khối.
#. Giữ file trong thư mục tài nguyên của bạn.
#. Dùng chức năng nhập khối trong Kitchen để mở lại và chỉnh sửa.
#. Trong Blockly, dùng chức năng nhập khối của thư viện, sau đó kiểm tra
   khối trong hộp công cụ và mã được sinh ra.

Nếu file báo lỗi khi nhập, kiểm tra ``type`` có khớp với định nghĩa khối,
tên trường có trùng hay không và cấu trúc JSON có còn đầy đủ.
