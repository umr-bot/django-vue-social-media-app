# Generated by Django 3.0.6 on 2020-06-07 16:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_post_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='username',
            field=models.CharField(default='Anonymous', max_length=100),
        ),
        migrations.AlterField(
            model_name='post',
            name='category',
            field=models.TextField(default='No Category', max_length=100),
        ),
        migrations.AlterField(
            model_name='post',
            name='location',
            field=models.TextField(default='No Location', max_length=100),
        ),
    ]
