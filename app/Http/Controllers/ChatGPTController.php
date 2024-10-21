<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

class ChatGPTController extends Controller
{
    // Function to generate and rate the paragraph
    public function rateParagraph(Request $request)
    {
        $client = new Client();
        $openai_api_key = env('OPENAI_API_KEY');
        $paragraph = $request->input('paragraph');

        try {
            // Make the request to OpenAI's API
            $response = $client->post('https://api.openai.com/v1/chat/completions', [
                'headers' => [
                    'Authorization' => 'Bearer ' . $openai_api_key,
                    'Content-Type'  => 'application/json',
                ],
                'json' => [
                    'model' => 'gpt-3.5-turbo',  // Change to a model you have access to
                    'messages' => [
                        ['role' => 'user', 'content' => "Rate this paragraph on a scale of 1 to 10 and explain why: \"$paragraph\""],
                    ],
                    'max_tokens' => 100,
                ]
            ]);
            
            // Decode the API response
            $data = json_decode($response->getBody(), true);

            // Check for 'choices' and 'message' to avoid errors
            if (isset($data['choices'][0]['message']['content'])) {
                $ratingResponse = $data['choices'][0]['message']['content'];
            } else {
                // Handle unexpected response format
                $ratingResponse = 'Error: Unable to retrieve a valid response from the API.';
            }

        } catch (RequestException $e) {
            // Catch any errors from the API request
            $ratingResponse = 'Error: ' . $e->getMessage();
        }

        return response()->json( [
            'ratingResponse' => $ratingResponse,
            'paragraph' => $paragraph,
        ], 200);
    }
}
