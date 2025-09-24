import express from 'express';
import morgan from 'morgan';
import 'dotenv/config';

import blogRoutes from './routes/blogRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(express.json());

app.use('/api/blogs', blogRoutes);
app.use('/api/categories', categoryRoutes);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message || 'Internal Server Error',
    },
  });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}

export default app;