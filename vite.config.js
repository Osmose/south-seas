import path from 'path';

export default {
  base: '/south-seas/',
  resolve: {
    alias: {
      'south-seas': path.resolve(__dirname, 'src'),
    },
  },
};
