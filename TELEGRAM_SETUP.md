# Hướng dẫn cấu hình Telegram Bot

## Bước 1: Tạo Telegram Bot

1. Mở Telegram và tìm kiếm `@BotFather`
2. Gửi lệnh `/newbot` để tạo bot mới
3. Đặt tên cho bot (ví dụ: "ADS Agency Contact Bot")
4. Đặt username cho bot (phải kết thúc bằng "bot", ví dụ: "ads_agency_contact_bot")
5. BotFather sẽ cung cấp cho bạn một **Bot Token** - lưu lại token này

## Bước 2: Lấy Chat ID

### Cách 1: Sử dụng @userinfobot
1. Tìm kiếm `@userinfobot` trên Telegram
2. Gửi tin nhắn `/start`
3. Bot sẽ trả về thông tin của bạn, bao gồm **Chat ID**

### Cách 2: Sử dụng API Telegram
1. Gửi tin nhắn cho bot bạn vừa tạo
2. Truy cập URL: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
3. Tìm `chat.id` trong response JSON

## Bước 3: Cấu hình Environment Variables

1. Mở file `.env.local` trong thư mục gốc của project
2. Thay thế các giá trị sau:

```env
TELEGRAM_BOT_TOKEN=your_actual_bot_token_here
TELEGRAM_CHAT_ID=your_actual_chat_id_here
```

### Ví dụ:
```env
TELEGRAM_BOT_TOKEN=6123456789:AAHdqTcvbXRxjklmnopqrstuvwxyz1234567
TELEGRAM_CHAT_ID=123456789
```

## Bước 4: Khởi động lại server

Sau khi cấu hình xong, khởi động lại development server:

```bash
npm run dev
```

## Bước 5: Test form

1. Truy cập website tại `http://localhost:3001`
2. Điền form liên hệ và gửi
3. Kiểm tra Telegram để xem tin nhắn đã được gửi thành công

## Lưu ý bảo mật

- **KHÔNG** commit file `.env.local` lên Git
- **KHÔNG** chia sẻ Bot Token với ai khác
- Nếu Bot Token bị lộ, hãy tạo bot mới ngay lập tức

## Troubleshooting

### Lỗi "Telegram configuration is missing"
- Kiểm tra lại file `.env.local` có đúng tên biến không
- Đảm bảo không có khoảng trắng thừa trong token/chat ID

### Lỗi "Failed to send message to Telegram"
- Kiểm tra Bot Token có đúng không
- Kiểm tra Chat ID có đúng không
- Đảm bảo đã gửi tin nhắn `/start` cho bot trước

### Bot không nhận được tin nhắn
- Kiểm tra Chat ID có đúng không
- Đảm bảo bot chưa bị block
- Thử gửi tin nhắn trực tiếp cho bot để kích hoạt