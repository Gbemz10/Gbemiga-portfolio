import 'package:flutter/material.dart';
import '../design_system/app_ui_kit.dart';

class FooterSection extends StatelessWidget {
  const FooterSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.symmetric(vertical: AppSpacing.xxl, horizontal: AppSpacing.xxl),
      decoration: const BoxDecoration(
        border: Border(top: BorderSide(color: AppColors.lightBorder)),
      ),
      child: Center(
        child: Text(
          '© ${DateTime.now().year} Oluwagbemiga Shoga.',
          style: const TextStyle(fontSize: 12, color: AppColors.neutral400, fontWeight: FontWeight.w600),
        ),
      ),
    );
  }
}
