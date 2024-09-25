export type ProductProps = {
  id: string;
  name: string;
  price: number;
  stock: number;
};

export class Product {
  private constructor(private props: ProductProps) {}

  public static create(name: string, price: number) {
    return new Product({
      id: crypto.randomUUID().toString(),
      name,
      price,
      stock: 0,
    });
  }

  public static with(props: ProductProps) {
    return new Product(props);
  }

  public get id() {
    return this.props.id;
  }

  public get name() {
    return this.props.name;
  }

  public get price() {
    return this.props.price;
  }

  public get stock() {
    return this.props.stock;
  }

  public increaseStock(amount: number) {
    this.props.stock += amount;
  }

  public decreaseStock(amount: number) {
    this.props.stock -= amount;
  }
}
