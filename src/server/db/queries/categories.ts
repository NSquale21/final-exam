import { Query } from '../';
import type { TCategories } from '../models';

const all = () => Query<TCategories[]>('SELECT * FROM categories');

export default {
    all
}