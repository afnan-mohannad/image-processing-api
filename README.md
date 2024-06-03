### The scripts needed to test/start/build your application

Run prettier

```bash
  npm run prettier
```

Run tests

```bash
  npm run test
```

Start the dev server

```bash
  npm run dev
```

Build the project

```bash
  npm run build
```

Run the application

```bash
  npm run start
```

## Run Locally

Go to the project directory

```bash
  cd folder-name
```

Install dependencies

```bash
  npm install
```

Start the dev server

```bash
  npm run dev
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

### Any endpoints that should be accessed to test that you have created the required functionality


```http
  GET /api/listImages
```

#### Create thumb version of image

```http
  GET /api/images/?filename={filename}&height={height}&width={width}
```

| Parameter  | Type     | Description                                               |
| :--------- | :------- | :-------------------------------------------------------- |
| `filename` | `string` | **Required**. filename of the desired image to be resized |
| `height`   | `number` | **Required**. desired height                              |
| `width`    | `number` | **Required**. desired width                               |

