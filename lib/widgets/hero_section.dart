import 'package:flutter/material.dart';
import '../design_system/app_ui_kit.dart';

/// Identity is shown as plain, understated text above the headline rather
/// than a rounded "eyebrow" pill, since that pattern reads as a generic
/// template component rather than a deliberately designed page.
class HeroSection extends StatelessWidget {
  const HeroSection({super.key, required this.onViewWork, required this.onContact});

  final VoidCallback onViewWork;
  final VoidCallback onContact;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        const SizedBox(height: AppSpacing.xxxl),
        const Text(
          'OLUWAGBEMIGA SHOGA',
          style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppColors.neutral500, letterSpacing: 1.2),
        ),
        const SizedBox(height: AppSpacing.xs),
        const Text(
          'Mobile & full-stack developer',
          style: TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: AppColors.neutral400),
        ),
        AppHeroSection(
          headline: 'I build software that ships, not just demos.',
          subhead:
              'From a capstone with formal security and usability testing, to a bill-splitting '
              'app running in production, to a ledger app my sister uses every day, I build for '
              'people who actually have to use the thing.',
          primaryCtaLabel: 'View my work',
          onPrimaryCta: onViewWork,
          secondaryCtaLabel: 'Get in touch',
          onSecondaryCta: onContact,
        ),
      ],
    );
  }
}
