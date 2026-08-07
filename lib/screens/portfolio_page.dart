import 'package:flutter/material.dart';
import '../design_system/app_ui_kit.dart';
import '../widgets/nav_bar.dart';
import '../widgets/hero_section.dart';
import '../widgets/about_section.dart';
import '../widgets/projects_section.dart';
import '../widgets/contact_section.dart';
import '../widgets/footer_section.dart';

class PortfolioPage extends StatefulWidget {
  const PortfolioPage({super.key});

  @override
  State<PortfolioPage> createState() => _PortfolioPageState();
}

class _PortfolioPageState extends State<PortfolioPage> {
  final _aboutKey = GlobalKey();
  final _projectsKey = GlobalKey();
  final _contactKey = GlobalKey();

  void _scrollTo(GlobalKey key) {
    final ctx = key.currentContext;
    if (ctx != null) {
      Scrollable.ensureVisible(
        ctx,
        duration: const Duration(milliseconds: 400),
        curve: Curves.easeInOut,
      );
    }
  }

  void _handleNavTap(String section) {
    switch (section) {
      case 'About':
        _scrollTo(_aboutKey);
        break;
      case 'Projects':
        _scrollTo(_projectsKey);
        break;
      case 'Contact':
        _scrollTo(_contactKey);
        break;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          NavBar(onNavTap: _handleNavTap, onContactTap: () => _scrollTo(_contactKey)),
          Expanded(
            child: SingleChildScrollView(
              child: Column(
                children: [
                  Center(
                    child: ConstrainedBox(
                      constraints: const BoxConstraints(maxWidth: 1080),
                      child: Padding(
                        padding: const EdgeInsets.symmetric(horizontal: AppSpacing.xxl),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.stretch,
                          children: [
                            HeroSection(
                              onViewWork: () => _scrollTo(_projectsKey),
                              onContact: () => _scrollTo(_contactKey),
                            ),
                            const SizedBox(height: AppSpacing.huge),
                            KeyedSubtree(key: _aboutKey, child: const AboutSection()),
                            const SizedBox(height: AppSpacing.massive),
                            KeyedSubtree(key: _projectsKey, child: const ProjectsSection()),
                            const SizedBox(height: AppSpacing.massive),
                            KeyedSubtree(key: _contactKey, child: const ContactSection()),
                            const SizedBox(height: AppSpacing.huge),
                          ],
                        ),
                      ),
                    ),
                  ),
                  const FooterSection(),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
