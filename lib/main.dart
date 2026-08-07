import 'package:flutter/material.dart';
import 'design_system/app_ui_kit.dart';
import 'screens/portfolio_page.dart';

void main() => runApp(const PortfolioApp());

class PortfolioApp extends StatelessWidget {
  const PortfolioApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Oluwagbemiga Shoga',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.light,
      home: const PortfolioPage(),
    );
  }
}
