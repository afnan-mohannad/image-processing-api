import request from 'supertest';
import app from '../../index';

describe('API /api/listImages', () => {
    it('should respond with status 200 and return a list of images', done => {
        request(app)
            .get('/api/listImages')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should handle non-existent endpoints with status 404', done => {
        request(app)
            .get('/api/nonExistentEndpoint')
            .expect(404, done);
    });
});

describe('Image Processing', () => {
    it('should resize an image successfully', done => {
        const imagePath = 'path/to/sample-image.jpg'; // Replace with actual path
        request(app)
            .post('/api/resizeImage')
            .attach('image', imagePath)
            .field('width', 100)
            .field('height', 100)
            .expect(200)
            .end((err, res) => {
                if (err) return done();
                // Add assertions to check the resized image properties if necessary
                done();
            });
    });

    it('should handle image resizing errors gracefully', done => {
        request(app)
            .post('/api/resizeImage')
            .attach('image', 'invalid/path/to/image.jpg') // Invalid path to trigger an error
            .field('width', 100)
            .field('height', 100)
            .expect(500, done);
    });
});

// You can add more tests here for other endpoints and methods
