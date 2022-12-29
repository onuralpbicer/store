CREATE TABLE IF NOT EXISTS categories (
    id uuid NOT NULL,
    name text NOT NULL,
    primary key(id)
);

CREATE TABLE IF NOT EXISTS subcategories (
    id uuid NOT NULL,
    name text NOT NULL,
    category_id uuid NOT NULL,
    primary key(id),
    constraint fk_subcategory foreign key (category_id) references categories(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS products (
    id uuid NOT NULL,
    name text NOT NULL,
    subcategory_id uuid NOT NULL,
    description TEXT NOT NULL,
    stock INTEGER DEFAULT 0,
    primary key(id),
    constraint fk_products foreign key (subcategory_id) references subcategories(id),
    constraint stock_check check (stock >= 0)
);

CREATE TABLE IF NOT EXISTS reviews (
    product_id uuid NOT NULL,
    rating INTEGER NOT NULL,
    review TEXT,
    constraint fk_reviews foreign key (product_id) references products(id),
    constraint rating_check check (rating > 0 AND rating < 6)
);
