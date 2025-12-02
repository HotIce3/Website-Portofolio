# 📡 API Documentation - Kopi Nusantara Brew

## Base URL

```
https://your-project.supabase.co
```

## Authentication

All requests include Supabase API key in headers:

```
Authorization: Bearer YOUR_ANON_KEY
Content-Type: application/json
```

## Endpoints

### Menu Management

#### GET /rest/v1/menu

Fetch all menu items with optional filters

**Query Parameters:**

- `select`: Comma-separated columns (default: \*)
- `category`: Filter by category (Hot, Ice, Milk-based, Non-coffee)
- `order`: Sort order (e.g., `created_at.desc`)
- `limit`: Items per page

**Example:**

```bash
GET /rest/v1/menu?select=*&category=eq.Hot&order=created_at.desc&limit=10
```

**Response:**

```json
[
  {
    "id": 1,
    "name": "Espresso Nusantara",
    "category": "Hot",
    "description": "Espresso murni dari biji kopi pilihan Nusantara",
    "price": 25000,
    "image_url": "https://...",
    "created_at": "2024-12-01T10:00:00Z"
  }
]
```

#### GET /rest/v1/menu?id=eq.{id}

Get single menu item

**Example:**

```bash
GET /rest/v1/menu?id=eq.1&select=*
```

#### POST /rest/v1/menu

Create new menu item (Admin only)

**Body:**

```json
{
  "name": "Kopi Baru",
  "category": "Hot",
  "description": "Deskripsi kopi",
  "price": 30000,
  "image_url": "https://..."
}
```

**Response:**

```json
{
  "id": 9,
  "name": "Kopi Baru",
  ...
}
```

#### PATCH /rest/v1/menu?id=eq.{id}

Update menu item

**Body:**

```json
{
  "price": 32000,
  "description": "Updated description"
}
```

#### DELETE /rest/v1/menu?id=eq.{id}

Delete menu item

---

### Testimonials

#### GET /rest/v1/testimonials

Fetch all testimonials

**Query Parameters:**

- `select`: Columns to return
- `order`: Sort order
- `limit`: Items per page

**Response:**

```json
[
  {
    "id": 1,
    "name": "Budi Santoso",
    "review": "Kopi terbaik yang pernah saya coba!",
    "rating": 5,
    "image_url": "https://...",
    "created_at": "2024-11-30T15:30:00Z"
  }
]
```

#### POST /rest/v1/testimonials

Add new testimonial

**Body:**

```json
{
  "name": "John Doe",
  "review": "Amazing coffee and service!",
  "rating": 5,
  "image_url": "https://..."
}
```

#### PATCH /rest/v1/testimonials?id=eq.{id}

Update testimonial

#### DELETE /rest/v1/testimonials?id=eq.{id}

Delete testimonial

---

### Orders

#### GET /rest/v1/orders

Fetch all orders (Admin only)

**Query Parameters:**

- `status`: Filter by status (pending, completed)
- `order`: Sort by (created_at.desc)

**Response:**

```json
[
  {
    "id": 1,
    "name": "Customer Name",
    "phone": "08123456789",
    "address": "Jl. Sudirman No. 123",
    "items": "[{\"id\": 1, \"name\": \"Espresso\", \"quantity\": 2}]",
    "total_price": 50000,
    "status": "pending",
    "created_at": "2024-12-02T09:15:00Z"
  }
]
```

#### POST /rest/v1/orders

Create new order

**Body:**

```json
{
  "name": "Customer Name",
  "phone": "08123456789",
  "address": "Jl. Sudirman No. 123",
  "items": "[{\"id\": 1, \"name\": \"Espresso\", \"price\": 25000, \"quantity\": 2}]",
  "total_price": 50000,
  "status": "pending"
}
```

#### PATCH /rest/v1/orders?id=eq.{id}

Update order status

**Body:**

```json
{
  "status": "completed"
}
```

---

### Storage (Images)

#### Upload Image

```javascript
// Using Supabase client
const { data, error } = await supabase.storage
  .from("menu-images")
  .upload(`filename.jpg`, file);
```

#### Get Public URL

```javascript
const { data } = supabase.storage
  .from("menu-images")
  .getPublicUrl("filename.jpg");
```

---

## Error Handling

### Error Responses

**400 Bad Request**

```json
{
  "code": "42000",
  "message": "Syntax error or access violation"
}
```

**401 Unauthorized**

```json
{
  "code": "42501",
  "message": "row level security violation"
}
```

**404 Not Found**

```json
{
  "code": "PGRST116",
  "message": "The request body is missing"
}
```

---

## JavaScript SDK Examples

### Fetch Menu

```javascript
import { supabase } from "./utils/supabase";

const getMenu = async () => {
  const { data, error } = await supabase
    .from("menu")
    .select("*")
    .eq("category", "Hot")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};
```

### Create Order

```javascript
const createOrder = async (orderData) => {
  const { data, error } = await supabase
    .from("orders")
    .insert([orderData])
    .select();

  if (error) throw error;
  return data[0];
};
```

### Update Menu Item

```javascript
const updateMenu = async (id, updates) => {
  const { data, error } = await supabase
    .from("menu")
    .update(updates)
    .eq("id", id)
    .select();

  if (error) throw error;
  return data[0];
};
```

---

## Rate Limiting

- Free tier: 100 requests per second
- Standard pricing: 1000 requests per second

---

## CORS

Allow origins:

- `https://kopi-nusantara-brew.vercel.app`
- `http://localhost:3000` (development)

---

## Webhooks (Optional)

Subscribe to database changes:

```javascript
const subscription = supabase
  .on(
    "postgres_changes",
    {
      event: "INSERT",
      schema: "public",
      table: "orders",
    },
    (payload) => {
      console.log("New order:", payload.new);
    }
  )
  .subscribe();
```

---

## Best Practices

1. **Always handle errors** in try-catch blocks
2. **Validate input** before sending to API
3. **Use select** to fetch only needed columns
4. **Implement pagination** for large datasets
5. **Cache responses** using React Context or localStorage
6. **Use connection pooling** for better performance

---

For more info, see [Supabase Docs](https://supabase.com/docs)
