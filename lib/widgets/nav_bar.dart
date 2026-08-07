import 'package:flutter/material.dart';
import '../design_system/app_ui_kit.dart';

/// Sticky top navigation. Collapses to just the brand mark + contact button
/// on narrow widths, since a full link row wraps awkwardly on mobile.
class NavBar extends StatelessWidget {
  const NavBar({super.key, required this.onNavTap, required this.onContactTap});

  final void Function(String section) onNavTap;
  final VoidCallback onContactTap;

  static const _links = ['About', 'Projects', 'Contact'];

  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.of(context).size.width;
    final showLinks = width >= 700;

    return Container(
      decoration: const BoxDecoration(
        color: AppColors.white,
        border: Border(bottom: BorderSide(color: AppColors.lightBorder)),
      ),
      padding: const EdgeInsets.symmetric(horizontal: AppSpacing.xxl, vertical: AppSpacing.lg),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(
            'Gbemiga.',
            style: Theme.of(context).textTheme.titleLarge?.copyWith(fontWeight: FontWeight.w800),
          ),
          if (showLinks)
            Row(
              children: [
                for (final link in _links)
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: AppSpacing.lg),
                    child: InkWell(
                      onTap: () => onNavTap(link),
                      child: Text(
                        link,
                        style: Theme.of(context).textTheme.labelLarge?.copyWith(color: AppColors.neutral700),
                      ),
                    ),
                  ),
              ],
            ),
          AppButton(label: 'Contact', size: AppButtonSize.sm, onPressed: onContactTap),
        ],
      ),
    );
  }
}
