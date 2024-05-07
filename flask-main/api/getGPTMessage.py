from flask_restful import Resource, request
import os
import requests
import json

class getGPTMessage(Resource):
    def __init__(self):
        self.apiKey = os.getenv('OPEN_AI_KEY')

    def post(self):
        messages = request.json.get('messages')

        data = {
            "model": "gpt-3.5-turbo",
            "messages": messages,
            "max_tokens": 1024
        }

        headers = {
            "Authorization": f"Bearer {self.apiKey}",
            "Content-Type": "application/json"
        }

        response = requests.post(
            'https://api.openai.com/v1/chat/completions',
            json=data,
            headers=headers)

        if response.status_code == 200:
            response_data = response.json()
            try:
                choices = response_data.get('choices', [{}])[0]
                message = choices.get('message', {})
                content = message.get('content', 'No content')
                usage = response_data.get('usage', {})
                prompt_tokens = usage.get('prompt_tokens', 0)
                completion_tokens = usage.get('completion_tokens', 0)
                total_tokens = usage.get('total_tokens', 0)

                # Calculate costs based on token usage
                input_token_cost = 0.50 / 1_000_000  # Cost per token for input
                output_token_cost = 1.50 / 1_000_000  # Cost per token for output

                # Calculate the total cost
                total_cost = (prompt_tokens * input_token_cost) + (completion_tokens * output_token_cost)


                return {
                    'message': content,
                    'prompt_tokens': prompt_tokens,
                    'completion_tokens': completion_tokens,
                    'total_tokens': total_tokens,
                    'cost': f"${total_cost:.6f}"
                }
            except Exception as e:
                print(f"Error processing response: {str(e)}")
                return {"message": "Error processing response", 'tokens_used': 0}
        else:
            print("Error: ", response.status_code, response.text)
            return {"message": "오류: 요청 실패", 'tokens_used': 0}
