import unittest
from app.run import create_app

class TestPostEndpoint(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        """Set up the test client and any required resources."""
        cls.app = create_app()
        cls.client = cls.app.test_client()

    def test_post_valid_data(self):
        """Test POST request with valid JSON data."""
        payload = {
            "key": "value",
            "name": "StockSense",
            "data": [1, 2, 3]
        }
        response = self.client.post('/submit-data', json=payload)
        self.assertEqual(response.status_code, 200)
        self.assertIn('success', response.json)
        self.assertTrue(response.json['success'])

    def test_post_invalid_data(self):
        """Test POST request with invalid data."""
        payload = "This is not valid JSON"
        response = self.client.post('/submit-data', data=payload)
        self.assertEqual(response.status_code, 400)
        self.assertIn('error', response.json)
        self.assertEqual(response.json['error'], 'Invalid input')

if __name__ == "__main__":
    unittest.main()
