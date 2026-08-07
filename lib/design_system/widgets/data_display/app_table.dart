import 'package:flutter/material.dart';
import '../../theme/app_colors.dart';
import '../../theme/app_spacing.dart';

class AppTable extends StatelessWidget {
  const AppTable({super.key, required this.columns, required this.rows, this.onRowTap});

  final List<String> columns;
  final List<List<Widget>> rows;
  final void Function(int rowIndex)? onRowTap;

  @override
  Widget build(BuildContext context) {
    final scheme = Theme.of(context).colorScheme;
    return Container(
      decoration: BoxDecoration(
        border: Border.all(color: scheme.outline),
        borderRadius: BorderRadius.circular(14),
      ),
      clipBehavior: Clip.antiAlias,
      child: Column(
        children: [
          Container(
            color: AppColors.neutral50,
            padding: const EdgeInsets.symmetric(horizontal: AppSpacing.lg, vertical: AppSpacing.md),
            child: Row(
              children: [
                for (final col in columns)
                  Expanded(
                    child: Text(
                      col,
                      style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppColors.neutral500, letterSpacing: 0.3),
                    ),
                  ),
              ],
            ),
          ),
          for (int i = 0; i < rows.length; i++)
            InkWell(
              onTap: onRowTap == null ? null : () => onRowTap!(i),
              child: Container(
                decoration: BoxDecoration(
                  border: Border(top: BorderSide(color: scheme.outline)),
                ),
                padding: const EdgeInsets.symmetric(horizontal: AppSpacing.lg, vertical: AppSpacing.md),
                child: Row(
                  children: [
                    for (final cell in rows[i]) Expanded(child: cell),
                  ],
                ),
              ),
            ),
        ],
      ),
    );
  }
}
