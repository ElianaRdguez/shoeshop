import 'package:flutter/material.dart';

class ProductCard extends StatelessWidget {
  final Map product;

  ProductCard({required this.product});

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: EdgeInsets.all(10),
      child: ListTile(
        title: Text(product['name']),
        subtitle: Text('${product['price']} €'),
        trailing: Icon(Icons.shopping_cart),
      ),
    );
  }
}