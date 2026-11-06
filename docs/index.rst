Tài liệu LumiSTEM
=================

Hướng dẫn sử dụng Kitchen, Blockly và Services dành cho khách chưa đăng nhập.
Bắt đầu với :doc:`getting-started/quickstart` hoặc chọn một phần tài liệu bên dưới.

Bộ phần mềm
-----------

* :doc:`LumiSTEM Kitchen <kitchen/overview>`: tạo khối lệnh, cấu hình bo mạch
  và lưu tài nguyên dưới dạng JSON.
* :doc:`LumiSTEM Blockly <blockly/overview>`: lập trình kéo thả, lưu dự án
  và chuẩn bị chương trình cho thiết bị.
* :doc:`LumiSTEM Services <services/overview>`: tìm hiểu các dịch vụ và
  kết nối Connector local để biên dịch, nạp chương trình.

Lộ trình sử dụng
---------------

#. Chuẩn bị trình duyệt và một thư mục lưu dự án.
#. Tạo tài nguyên riêng bằng Kitchen nếu cần.
#. Lập trình bằng các khối lệnh trong Blockly.
#. Kết nối dịch vụ local để đưa chương trình lên bo mạch.

Bạn có thể bắt đầu trực tiếp với Blockly bằng các khối lệnh có sẵn.
Kitchen là bước tùy chọn khi cần khối lệnh hoặc cấu hình bo mạch riêng.

.. note::

   Tải file JSON về máy sau khi chỉnh sửa. File Kitchen và file dự án
   Blockly có cấu trúc khác nhau, cần được mở bằng đúng công cụ.
   Xem :doc:`getting-started/guest` để biết các giới hạn của chế độ khách.

Trợ giúp
--------

Sử dụng ô tìm kiếm của tài liệu hoặc xem :doc:`troubleshooting` khi gặp
vấn đề với file dự án hoặc kết nối thiết bị.

.. toctree::
   :hidden:
   :maxdepth: 1
   :caption: BẮT ĐẦU

   getting-started/quickstart
   getting-started/guest

.. toctree::
   :hidden:
   :maxdepth: 1
   :caption: LUMISTEM KITCHEN

   kitchen/overview
   kitchen/blocks
   kitchen/boards

.. toctree::
   :hidden:
   :maxdepth: 1
   :caption: LUMISTEM BLOCKLY

   blockly/overview
   blockly/projects
   blockly/upload

.. toctree::
   :hidden:
   :maxdepth: 1
   :caption: LUMISTEM SERVICES

   services/overview
   services/local-connector

.. toctree::
   :hidden:
   :maxdepth: 1
   :caption: TRỢ GIÚP

   troubleshooting
