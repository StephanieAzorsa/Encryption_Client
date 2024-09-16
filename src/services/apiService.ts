const API_BASE_URL = 'http://localhost:8081/api/encryption';

export async function encodeText(text: string): Promise<string> {
    const response = await fetch(`${API_BASE_URL}/encrypt`, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
        },
        body: text,
    });
    if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
    }
    return response.text();
}

export async function decodeText(text: string): Promise<string> {
    const response = await fetch(`${API_BASE_URL}/decrypt`, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
        },
        body: text,
    });
    if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
    }
    return response.text();
}