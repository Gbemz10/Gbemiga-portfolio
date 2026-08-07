import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import '../design_system/app_ui_kit.dart';
import 'section_header.dart';

class ContactSection extends StatelessWidget {
  const ContactSection({super.key});

  static const _email = 'shogagbemiga@gmail.com';
  static const _github = 'https://github.com/Gbemz10';
  static const _linkedin = 'https://www.linkedin.com/in/oluwagbemigashoga';

  Future<void> _open(String url) => launchUrl(Uri.parse(url), mode: LaunchMode.externalApplication);

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const SectionHeader(
          eyebrow: 'CONTACT',
          title: "Let's talk",
          subtitle: "Open to new projects, collaborations, or just a conversation about what you're building.",
        ),
        const SizedBox(height: AppSpacing.xxxl),
        Wrap(
          spacing: AppSpacing.lg,
          runSpacing: AppSpacing.lg,
          children: [
            _ContactCard(
              icon: Icons.mail_outline_rounded,
              label: 'Email',
              value: _email,
              onTap: () => _open('mailto:$_email'),
            ),
            _ContactCard(
              icon: Icons.call_outlined,
              label: 'Phone',
              value: '0706 349 100',
              onTap: () => _open('tel:0706349100'),
            ),
            _ContactCard(
              icon: Icons.code_rounded,
              label: 'GitHub',
              value: 'Gbemz10',
              onTap: () => _open(_github),
            ),
            _ContactCard(
              icon: Icons.business_center_outlined,
              label: 'LinkedIn',
              value: 'oluwagbemigashoga',
              onTap: () => _open(_linkedin),
            ),
          ],
        ),
      ],
    );
  }
}

class _ContactCard extends StatelessWidget {
  const _ContactCard({required this.icon, required this.label, required this.value, required this.onTap});

  final IconData icon;
  final String label;
  final String value;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 260,
      child: AppCard(
        onTap: onTap,
        child: Row(
          children: [
            Container(
              width: 40,
              height: 40,
              alignment: Alignment.center,
              decoration: BoxDecoration(color: AppColors.primaryLight, borderRadius: AppRadius.mdBR),
              child: Icon(icon, size: 20, color: AppColors.primaryDark),
            ),
            const SizedBox(width: AppSpacing.md),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    label,
                    style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w600, color: AppColors.neutral500),
                  ),
                  const SizedBox(height: 2),
                  Text(
                    value,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppColors.neutral900),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
