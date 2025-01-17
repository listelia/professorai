import asyncio
import websockets
import openai
import os

# Set OpenAI API key from environment variables
openai.api_key = os.getenv("OPENAI_API_KEY")

async def professor_ai_chat(prompt):
    try:
        response = await openai.ChatCompletion.acreate(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are Professor AI, an expert in cryptocurrency."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=150,
            temperature=0.7
        )
        return response['choices'][0]['message']['content'].strip()
    except Exception as e:
        return f"Error: {str(e)}"

async def handle_websocket(websocket):
    try:
        async for message in websocket:
            response = await professor_ai_chat(message)
            await websocket.send(response)
    except websockets.exceptions.ConnectionClosed:
        pass

async def main():
    port = int(os.environ.get("PORT", 3000))  # Get the PORT from Render's environment
    server = await websockets.serve(handle_websocket, "0.0.0.0", port)
    print(f"WebSocket server is running on port {port}")
    await server.wait_closed()

if __name__ == "__main__":
    asyncio.run(main())
