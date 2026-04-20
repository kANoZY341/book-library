const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";
const BOOKS_URL = `${API_BASE_URL}/books`;

async function request(url, options = {}) {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    },
    ...options
  });

  let data = null;
  try {
    data = await response.json();
  } catch (_error) {
    data = null;
  }

  if (!response.ok) {
    const message = data?.message || "Request failed.";
    throw new Error(message);
  }

  return data;
}

export function getBooks() {
  return request(BOOKS_URL);
}

export function getBookById(id) {
  return request(`${BOOKS_URL}/${id}`);
}

export function createBook(bookData) {
  return request(BOOKS_URL, {
    method: "POST",
    body: JSON.stringify(bookData)
  });
}

export function updateBook(id, updatedData) {
  return request(`${BOOKS_URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedData)
  });
}

export function deleteBook(id) {
  return request(`${BOOKS_URL}/${id}`, {
    method: "DELETE"
  });
}

