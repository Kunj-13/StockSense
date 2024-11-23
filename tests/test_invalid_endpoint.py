import unittest
from app.run import create_app

class TestInvalidEndpoint(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        """Set up the test client and any required resources."""
        cls.app = create_app()
        cls.client = cls.app.test_client()

    def test_invalid_endpoint(self):
        """Test an invalid API endpoint."""
        response = self.client.get('/invalid-endpoint')
        self.assertEqual(response.status_code, 404)
        self.assertIn('error', response.json)
        self.assertEqual(response.json['error'], 'Not Found')

if __name__ == "__main__":
    unittest.main()
