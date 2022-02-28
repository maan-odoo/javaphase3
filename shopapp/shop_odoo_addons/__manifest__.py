# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.
{
    'name' : 'Shop example of js phase 3',
    'version' : '1.0',
    'summary': 'Shopping App',
    'sequence': 15,
    'description': "",
    'category': 'Apps',
    'depends' : ['base_setup'],
    'data': [
        'security/ir.model.access.csv',
        'views/product_view.xml',
    ],
    'installable': True,
    'application': True,
    'auto_install': False,
    'license': 'LGPL-3',
}
