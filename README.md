# Cook & Bathe Shopify Theme

This repository contains the Cook & Bathe Shopify theme source prepared for development and review.

## Important Rules

- Do not push this full repository directly to production.
- Do not run a full theme upload to production from this repository.
- Do not deploy `config/settings_data.json` or `templates/*.json` without a fresh production review and explicit approval.
- Do not edit third-party app generated files unless the task is specifically about that app integration.
- Do not commit local environment files, credentials, exports, screenshots, logs, or backup archives.

## Production Deployment Boundary

Production deployment must be file-level and approval-based.

Recommended process:

1. Pull the current live production theme into a separate readonly folder.
2. Create a backup of that exact production pull.
3. Create a production release working copy from the fresh production pull.
4. Apply only the approved changed files.
5. Confirm the final diff contains only approved files.
6. Push only approved files with explicit `--only` paths and `--nodelete`.
7. Use a draft theme for QA when possible.
8. Publish only after QA and approval.

## Theme Files

Standard Shopify theme directories are included:

- `assets`
- `blocks`
- `config`
- `layout`
- `locales`
- `sections`
- `snippets`
- `templates`

## Third-Party Services

This theme includes existing storefront integrations and app-managed files, including analytics, marketing, wishlist, review, and filtering services. Some browser-facing account IDs are part of the current theme behavior. Do not remove or replace those integrations as a general cleanup task. Handle them only through a separate approved tracking, privacy, or app-integration task.

## External Work Notes

Use the task description for the exact assigned work. Keep changes small and focused. If a requested change touches shared product, cart, app, analytics, settings, or template JSON files, confirm the deployment impact before changing it.
